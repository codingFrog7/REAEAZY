"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Send } from "lucide-react";

const actions = [
  { id: "1", label: "Book tickets", category: "Travel" },
  { id: "2", label: "Summarize", category: "AI" },
  { id: "3", label: "Screen Studio", category: "Design" },
];

const highlightMatch = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-white text-black p-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

export default function BrutalistDarkDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [result, setResult] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const debounceRef = useRef(null);

  const categories = ["All", "Travel", "AI", "Design"];

  useEffect(() => {
    // Check if mobile on mount and on resize
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setFilter("All");
      setResult([]);
      setSelectedIndex(-1);
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const normalized = query.toLowerCase().trim();
      const filtered = actions.filter((a) => {
        const matchesQuery = a.label.toLowerCase().includes(normalized);
        const matchesCategory = filter === "All" || a.category === filter;
        return matchesQuery && matchesCategory;
      });
      setResult(normalized || filter !== "All" ? filtered : actions);
    }, 200);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, filter, open]);

  const handleKeyDown = (e) => {
    if (!result?.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % result.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev <= 0 ? result.length - 1 : prev - 1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      alert(`You selected: ${result[selectedIndex].label}`);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full border-2 font-['Fliege_Mono'] border-white bg-black text-white font-black uppercase rounded-none hover:bg-white hover:text-black transition-all text-lg py-6 tracking-widest">
          Search
        </Button>
      </DialogTrigger>

      <DialogContent
        className="max-w-5xl w-full bg-black text-white border-2 border-white p-0 rounded-none overflow-hidden"
      >
        <div className={`flex flex-col ${isMobile ? 'h-[80vh]' : 'h-[90vh]'}`}>
          {/* Header */}
          <div className="p-4 md:p-6 border-b-2 border-white text-xl md:text-2xl font-black tracking-widest uppercase text-center">
            Search Here..
          </div>

          <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
            {/* Sidebar - Hidden on mobile unless toggled */}
            {!isMobile && (
              <aside className="w-full md:w-56 bg-black md:border-r-2 border-white flex flex-col p-4">
                <h3 className="text-xs font-black uppercase mb-4">Filter</h3>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-left text-xs uppercase font-bold py-3 px-2 border-2 ${
                        filter === cat
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                      onClick={() => setFilter(cat)}
                    >
                      {cat}
                    </motion.button>
                  ))}
                </div>
              </aside>
            )}

            {/* Main content */}
            <main className="flex-1 flex flex-col p-4 md:p-6 space-y-4 overflow-y-auto">
              {/* Mobile filter toggle */}
              {isMobile && (
                <div className="flex overflow-x-auto pb-2 space-x-2">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat}
                      whileTap={{ scale: 0.95 }}
                      className={`whitespace-nowrap text-xs uppercase font-bold py-2 px-3 border-2 ${
                        filter === cat
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                      onClick={() => setFilter(cat)}
                    >
                      {cat}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Search input */}
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search here"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  className="w-full border-2 border-white rounded-none text-white placeholder:text-gray-400 bg-black text-base md:text-lg font-mono tracking-wide"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <AnimatePresence mode="popLayout">
                    {query.length > 0 ? (
                      <motion.div
                        key="send"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Send className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="search"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Search className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Results */}
              <div className="flex-1 overflow-y-auto border-2 border-white p-2 md:p-4">
                <AnimatePresence>
                  {open && result && (
                    <motion.ul
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {result.length > 0 ? (
                        result.map((action, index) => (
                          <motion.li
                            key={action.id}
                            className={`p-3 md:p-4 border-2 border-white font-mono uppercase text-xs md:text-sm cursor-pointer ${
                              index === selectedIndex
                                ? "bg-white text-black"
                                : "bg-black hover:bg-gray-800"
                            }`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            onMouseEnter={() => setSelectedIndex(index)}
                            onClick={() => {
                              alert(`You selected: ${action.label}`);
                              setOpen(false);
                            }}
                          >
                            {highlightMatch(action.label, query)}
                          </motion.li>
                        ))
                      ) : (
                        <motion.li
                          className="text-center text-xs text-gray-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          No results found.
                        </motion.li>
                      )}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </main>
          </div>

          {/* Footer */}
          <div className="text-center p-3 md:p-4 text-xs border-t-2 border-white font-mono">
            END OF LIST
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}